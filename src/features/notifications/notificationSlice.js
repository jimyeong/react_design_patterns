import React, { useLayoutEffect } from "react";
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import { client } from "../../api/client";

import { selectAllUsers } from "../users/usersSlice";
// added
const notificationAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState());
    const [latesNotification] = allNotifications;
    const lateTimeStamp = latesNotification ? latesNotification.date : "";
    const response = await client.get(
      `/fakeApi/notifications?since=${lateTimeStamp}`
    );
    return response.data;
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  // initialState: [],
  initialState: notificationAdapter.getInitialState(),
  reducers: {
    allNotificationsRead(state, action) {
      // state.forEach((notification) => {
      //   notification.read = true;
      // });
      Object.values(state.entities).forEach((notification) => {
        notification.read = true;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      notificationAdapter.upsertMany(state, action.payload);
      Object.values(state.entities).forEach((notification) => {
        notification.isNew = !notification.read;
      });

      // state.push(...action.payload);
      // state.forEach((notification) => {
      //   notification.isNew = !notification.read;
      // });
      // state.sort((a, b) => b.date.localeCompare(a.date));
    });
  },
});

export default notificationsSlice.reducer;

// export const selectAllNotifications = (state) => state.notifications;

export const { allNotificationsRead } = notificationsSlice.actions;

export const { selectAll: selectAllNotifications } =
  notificationAdapter.getSelectors((state) => state.notifications);
