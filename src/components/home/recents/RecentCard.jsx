import React from 'react';
import { list } from '../../data/Data';
import './Recent.css';

const RecentCard = () => {
  return (
    <div className="content grid3 mtop">
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val;
        return (
          <div className="box shadow" key={index}>
            <div className="img">
              <img src={cover} alt="" />
            </div>
            <div className="text">
              <div className="category flex">
                <span
                  style={{
                    background: category === 'For Sale' ? '#25b571' : '#ff9800',
                    color: category === 'For Sale' ? '#25b579' : '#ff9800',
                  }}
                >
                  {category}
                </span>
                <i className="fa fa-heart"></i>
              </div>
              <h4>{name}</h4>
            </div>
            <br />
            <span>{type}</span>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
