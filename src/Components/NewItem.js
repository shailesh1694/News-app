import React from "react";




export default function NewItem (props) {




  
    let { title, description, imgurl, newurl, author, date } = props;
    return (
      <div>
        <div className="card">
          <img src={!imgurl ? "https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg" : imgurl} className="card-img-top" alt="..." />
          



          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unkhown" : author} updated on {new Date(date).toGMTString()}</small></p>
            <span className="badge bg-light text-dark">{props.source}</span>
            <a href={newurl} className="btn btn-dark" target="_blanck">
              Read More
            </a>
          </div>
        </div>

      </div>
    );
  }

