import React from 'react'
import { IconButton, Select, MenuItem, TextField } from '@material-ui/core'
import { FirstPage, LastPage, NavigateBefore, NavigateNext } from '@material-ui/icons'

export const Pagination = (props) => {
    return (
        <div style={{ marginTop: '5px', marginLeft: '5px' }}>
            <span>
                Page {' '}
                <strong>
                    {props.pageIndex + 1} of {props.pageOptions.length}
                </strong> {' '}
            </span>
            <span>
                | Go to page:
                <TextField
                    style={{ width: '50px', marginLeft: '10px' }}
                    type="number" 
                    defaultValue={props.pageIndex + 1} 
                    onChange={e => { 
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        props.gotoPage(pageNumber)
                    }}
                />
            </span>
            <Select 
                style={{ marginRight: '5px', marginLeft: '5px' }} 
                value={props.pageSize} 
                onChange={e => props.setPageSize(Number(e.target.value))}
            >
                {[10, 25, 50].map(pageSize => (
                    <MenuItem 
                        key={pageSize} 
                        value={pageSize}
                    >
                        Show {pageSize}
                    </MenuItem>
                ))}
            </Select>
            <IconButton 
                size="small" 
                variant="outlined" 
                onClick={() => props.gotoPage(0)} 
                disabled={!props.canPreviousPage}
            >
                <FirstPage />
            </IconButton>
            <IconButton 
                size="small" 
                variant="outlined" 
                onClick={() => props.previousPage()} 
                disabled={!props.canPreviousPage}>
                    <NavigateBefore />
            </IconButton>
            <IconButton 
                size="small" 
                variant="outlined" 
                onClick={() => props.nextPage()} 
                disabled={!props.canNextPage}
            >
                <NavigateNext />
            </IconButton>
            <IconButton 
                size="small" 
                variant="outlined" 
                onClick={() => props.gotoPage(props.pageCount - 1)} 
                disabled={!props.canNextPage}
            >
                    <LastPage />
            </IconButton>
        </div>
    )
}
