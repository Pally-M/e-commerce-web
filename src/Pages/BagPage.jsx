import React from 'react';
import Sidebar from '../Components/Sidebar';
import BagItems from '../Components/BagItems';
import Bag from '../Components/Bag';

const BagPage = () => {
    return (
        <>
          <Sidebar />
          <BagItems />
          <Bag />
        </>
    );
}

export default BagPage;