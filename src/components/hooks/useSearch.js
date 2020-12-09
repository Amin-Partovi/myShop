import React,{useState,useEffect} from 'react';

const useSearch=(term,data)=>{
    const [debouncedTerm,setDebouncedTerm]=useState("");
    const [results,setResults]=useState([]);
    const [open,setOpen]=useState(false);

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncedTerm(term)
        },600)

        return ()=>{
            clearTimeout(timer)
        }
    },[term])

    useEffect(()=>{
        if(debouncedTerm.length!=0){
            setResults(data.products.filter(product=>product.title.toLowerCase().includes(debouncedTerm)))
            setOpen(true);
            document.body.addEventListener("click", ()=>{
                setOpen(false)
            })
        }
        else{
            setResults([])
        }
    },[debouncedTerm])

    

    return [results,open];
}



export default useSearch;
