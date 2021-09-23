import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({ page, setPage, userData }) {
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={userData.total_pages} page={page} onChange={handleChange}
                style={{ display: "flex", justifyContent: "center", marginTop: '3rem' }} />
        </Stack>
    );
}
