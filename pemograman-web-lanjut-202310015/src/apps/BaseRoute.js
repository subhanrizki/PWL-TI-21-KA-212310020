import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChapterOne } from '../modules/chapter-1';
import Signin from '../modules/chapter-2/widgets/authen';
import { ChapterTwo } from '../modules/chapter-2';

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne/>} />
        <Route path='signin' element={<Signin />} />
        <Route path='chapter-one' element={<ChapterOne/>} />
        {/* <Route path='chapter-two' element={<ChapterTwo/>} /> */}
        <Route path='home' elemet={<ChapterTwo />} />
      </Routes>
    </React.Suspense>
  );
}
