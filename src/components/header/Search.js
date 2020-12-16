import React,{useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import useSearch from '../hooks/useSearch';
import styles from './header.module.scss'



const Search=(props)=>{

    const [term,setTerm]=useState("");
    const [results,open]=useSearch(term,props);

    const renderResults=()=>{
        if(results!==[]){
            return(
                results.map((result)=>
                <Link to={`/detail/${result.id}`} className={styles.searchTitle} key={result.id}>
                    {result.title}
                </Link>
                )
            )
        }
    }
    
    return (
        <div className={styles.search}>
            <form className={styles.form} >
                <input className={styles.searchBar} type="text" placeholder="جستجو" value={term} onChange={e=>setTerm(e.target.value)}/>
            </form>
            <div className={styles.searchResultsContainer}>
                <div className={`${(results.length!==0 && open===true)?styles.searchResults:styles.emptyResult}`}>
                    {renderResults()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {products:Object.values(state.products)}
}

export default connect(mapStateToProps)(Search);