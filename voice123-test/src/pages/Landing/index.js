
import React from 'react'
import DataTable from '../../components/DataTable'
import Search from '../../components/Search'
import Pagination from '../../components/Pagination'

const Landing = () => {
  return (
    <div>
      <Search />
      <DataTable />
      <Pagination />
    </div>
  )
}

export default Landing