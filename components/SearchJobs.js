const SearchJobs = ({...rest}) => {
    return ( 
        <div>
            <input type="text" placeholder="Search Jobs" {...rest}></input>
            <br/> <br/>
        </div>
     );
}
 
export default SearchJobs;