import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../store/cardSlice';
import CardItem from './CardItem';
import Pagination from './Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CardsList = () => {
    const { cards } = useSelector(state => state.cards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCards());
    }, [dispatch]);

    return (
        <>
        {cards.length ? (
            <div className='list'>
                {cards.map(card => (
                    <CardItem  key={card.id} card={card}/>
                ))}
                <Pagination />
            </div>
        ) : (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )}
        </>
    );
};

export default CardsList;