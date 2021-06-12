import React, { useState, useEffect } from 'react';


import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientList from './page/PatientList';
import Pagination from './page/Pagination';
import queryString from 'query-string';
import GetFilterForm from './page/GetFilterForm';


function Search() {
    const [patientList, setPatientList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 0,
        _limit: 0,
        _totalRows: 0,
    })
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    })

    useEffect(() => {
        async function fetchPatientList() {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://localhost:3001/profileinfo?${paramsString}`;
                //const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });
                const { data} = responseJSON.data;
                //const {data, pagination} = responseJSON;
                setPatientList( data);
                setPagination(responseJSON.pagination);
                //setPagination(pagination);
            } catch (error) {
                console.log('Fail to fetch post list: ', error.message);
            }
        }
        fetchPatientList();
    }, [filters])

    function handlePageChange(newPage){
        console.log('New Page: ', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        })
    }

    function handleFiltersChange(newFilters){
        console.log('New filters: ', newFilters);
        setFilters({
            ...filters,
            _page: 1,
            name_like: newFilters.searchTerm.name,
            idno_like: newFilters.searchTerm.idno,
            planeid_liek: newFilters.searchTerm.planid,
        })
    }

    return (
        <div>
            <GetFilterForm onSubmit = {handleFiltersChange}/>
            <div className="title_result">
                <h5>Search result</h5>
            </div>
            <div className="search_result">
                <PatientList posts = {patientList}/>
                <Pagination 
                pagination = {pagination}
                onPageChange = {handlePageChange}/>
            </div>
        </div>
    );
}

export default Search;