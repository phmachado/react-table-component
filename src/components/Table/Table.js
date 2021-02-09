import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { GlobalSearch } from './components/GlobalSearch'
import { Pagination } from './components/Pagination'
import { COLUMNS } from './columns'
import './style.css'

function Table(props) {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => props.data, [])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        prepareRow,
        state,
        setGlobalFilter,
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,  
    } = useTable(
        { columns, data },
        useGlobalFilter,
        useSortBy,
        usePagination,
    )

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <>
            <GlobalSearch 
                filter={globalFilter} 
                setFilter={setGlobalFilter} 
            />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {/* Replace '' for icons if you want. */}
                                        {column.isSorted ? (column.isSortedDesc ? '' : '') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}                
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}                            
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Pagination 
                nextPage={nextPage}
                previousPage={previousPage}
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                pageOptions={pageOptions}
                gotoPage={gotoPage}
                pageCount={pageCount}
                setPageSize={setPageSize}
                pageIndex={pageIndex}
                pageSize={pageSize}
            />
        </>
    )
}

export default Table
