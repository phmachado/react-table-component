import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import { Search } from '@material-ui/icons'

export const GlobalSearch = ({ filter, setFilter }) => {
    return (
        <div style={{ marginBottom: '5px', marginLeft: '5px' }}>
            <span>
                <TextField
                    value={filter || ''}
                    onChange={e => setFilter(e.target.value)}
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                        ),
                    }}
                    size="small"
                />
            </span>
        </div>
    )
}
