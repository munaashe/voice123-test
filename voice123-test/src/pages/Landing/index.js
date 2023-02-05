
import React from 'react'
import DataTable from '../../components/DataTable'
import Search from '../../components/Search'
import PaginationNav from '../../components/Pagination'

const Landing = () => {
  return (
    <div>
      <Search />
      <DataTable />
      <PaginationNav />
    </div>
  )
}

export default Landing