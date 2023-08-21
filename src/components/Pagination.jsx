import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, getCards } from '../store/cardSlice'


export default function PaginationControlled() {
  const { currentPage, totalPages } = useSelector(state => state.cards);

  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(changePage(value));
    dispatch(getCards())
  };

  return (
    <div className='pagination-block'>
    <Stack spacing={2}>
      <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
    </Stack>
    </div>
  );
}