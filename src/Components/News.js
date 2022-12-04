import React,{useState,useEffect} from 'react';
import Loading from './Loading';
import NewItem from './NewItem'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';





export default function News(props) {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


let apikey= undefined;

//here you shoud register with new api and paste your api id above apikey ??
  useEffect(()=>{
    updatecontente()
  },[]);
  async function updatecontente() {
    console.log('updatedcontente called');
    setloading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
   
    let passdata = await data.json();
    console.log(passdata);
    setarticles(passdata.articles);
    settotalResults(passdata.totalResults);
    setloading(false)
  }



  async function fetchMoreData() {
    console.log("fethmoredata");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey==${apikey}&page=${page}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    console.log('url completed')
    let data = await fetch(url);
    let passdata = await data.json();
    console.log(passdata);
    setarticles(articles.concat(passdata.articles));
    settotalResults(passdata.totalResults);
    setloading(false)
  }

  console.log("rendercalled");

  return (
    <>

      <div className='container my-3'>
        <h2 className='text-center'>Top headlines</h2>
        {loading && <Loading />}



        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ <Loading />} >
          <div className='container my-3'>
            <div className='row'>

              {
                articles.map((element,index) => {
                  return <div className="col-md-4" key={index} >
                    <NewItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage} newurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })
              }
            </div>
          </div>
        </InfiniteScroll>
      </div>


    </>
  )
}








News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: "general"
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};












































