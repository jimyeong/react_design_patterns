import React, { useState, useCallback, useEffect } from "react";
import { INPUTS, SearchBar } from "./components";
import { useAsync } from "./hooks/useAsync";
import { TYPE_LOAD } from "./hooks/useAsync";
import styled from "styled-components";
import { _axios } from "./server/index";
import { utils } from "./utils";
import StarwarsPage from "./pages/starwars/StarwarsPage";
import { Routes, Route, Link } from "react-router-dom";
import ReduxTutorialPage from "./pages/reduxTutorial/ReduxTutorialPage";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import { UserPage } from "./features/users/UserPage";
import { UserList } from "./features/users/UsersList";
import { NotificationList } from "./features/notifications/NotificationList";
import { Navbar } from "./app/Navbar";
import OptimisingLaboratoryPage from "./pages/optimisingLaboratory/OptimisingLaboratoryPage";
import ReduxTodoPattern from "./pages/TodosReduxPattern/ReduxTodoPattern";

const INPUT_WRAPPER = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

const NAV = styled.nav``;
function App() {
  const callApi = async (params) => {
    const result = await _axios.get(params);
    return result;
  };
  const [state, dispatch] = useAsync(async () => {
    return await callApi("/starships");
  }, []);
  useEffect(() => {
    console.log("APP 실행됨");
  }, []);

  if (state.status == TYPE_LOAD.LOADING) return <div>loading</div>;
  if (state.status == TYPE_LOAD.ERROR) return <div>error</div>;
  if (state.status == TYPE_LOAD.RETRY) return <div>something went wrong</div>;

  return (
    <React.Fragment>
      <NAV>
        <ul>
          <li>
            <Link to="/reduxtutorial">Redux Tutorial</Link>
          </li>
          <li>
            <Link to="/starwars">Starwars</Link>
          </li>
          <li>
            <Link to="/optimising">Optimising</Link>
          </li>
        </ul>
      </NAV>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ReduxTodoPattern />} />
        <Route exact path="/reduxtutorial" element={<ReduxTutorialPage />} />
        <Route exact path="/posts/:postId" element={<SinglePostPage />} />
        <Route exact path="/editPost/:postId" element={<EditPostForm />} />
        <Route exact path="/users" element={<UserList />} />
        <Route exact path="/users/:userId" element={<UserPage />} />
        <Route exact path="/notifications" element={<NotificationList />} />
        <Route path="/starwars" element={<StarwarsPage />} />
        <Route path="/optimising" element={<OptimisingLaboratoryPage />} />
        <Route path="*" element={<div>No Match</div>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
