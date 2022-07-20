import React from 'react';
import BottomNavMenu from '../components/common/nav/BottomNavMenu';
import TopNavSearch from '../components/common/nav/TopNavSearch';

export default function SearchPage() {
  return (
    <>
      <TopNavSearch />
      <BottomNavMenu type='feed' />
    </>
  );
}
