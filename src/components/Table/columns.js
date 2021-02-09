import ProgressBar from '@ramonak/react-progress-bar'

export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'E-mail',
        accessor: 'email',
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
                if(value >= 0 && value <= 50 ) {
                    return <ProgressBar 
                        completed={value} 
                        labelColor="#2d3436" 
                        bgcolor="#d63031" 
                        labelAlignment="outside" 
                        labelSize="10px" 
                        borderRadius="0px" 
                    />

                } else if(value > 50 && value <=89) {
                    return <ProgressBar 
                        completed={value} 
                        labelColor="#2d3436" 
                        bgcolor="#fdcb6e" 
                        labelAlignment="outside" 
                        labelSize="10px" 
                        borderRadius="0px" 
                    />

                } else if(value > 89) {
                    return <ProgressBar 
                        completed={value} 
                        labelColor="#2d3436" 
                        bgcolor="#00b894" 
                        labelAlignment="outside" 
                        labelSize="10px" 
                        borderRadius="0px" 
                    />

                }
                 
            }
    },
]
