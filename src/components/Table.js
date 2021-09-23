import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function DenseTable({ userData }) {
    return (
        <TableContainer component={Paper} style={{ marginTop: "5rem" }} >
            <Table sx={{ minWidth: 650 }} size="small" >
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell align="left">First Name</TableCell>
                        <TableCell align="left">Last Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userData.data.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={user.avatar} alt={user.id} style={{ height: '5rem', width: '5rem' }} />
                            </TableCell>
                            <TableCell align="left">{user.first_name}</TableCell>
                            <TableCell align="left">{user.last_name}</TableCell>
                            <TableCell align="left">{user.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
