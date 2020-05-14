import React from 'react';
import Preloader from "../components/common/preloader";


export const withLazySuspense =(Component)=> {
   return (props) => {

        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
   </React.Suspense>
    }
};

