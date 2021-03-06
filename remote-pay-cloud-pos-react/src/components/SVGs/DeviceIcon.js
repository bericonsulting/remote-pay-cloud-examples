import React from 'react';

export default class DeviceIcon extends React.Component {

    constructor() {
        super();
    }

    render(){
        let className = 'home_icon';
        if(this.props.class !== undefined){
            className = this.props.class;
        }

        return (
            <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80">
                <path d="M56.1,23.9c-1.8,0-3.5,0-5.3,0c0-0.2,0-0.3,0-0.5c0-3.8,0-7.6,0-11.3c0-1.1-0.5-1.6-1.6-1.6
			c-12.3,0-24.7,0-37,0c-1.1,0-1.6,0.5-1.6,1.6c0,15.9,0,31.9,0,47.8c0,1.1,0.5,1.6,1.6,1.6c9.1,0,18.2,0,27.3,0c0.2,0,0.4,0,0.6,0
			c0,2.7,0,5.3,0,8c-0.2,0-0.3,0-0.4,0c-10.1,0-20.2,0-30.3,0c-2.4,0-4.2-1.7-4.2-4.2c0-18.7,0-37.4,0-56c0-2.4,1.7-4.2,4.2-4.2
			c14.2,0,28.5,0,42.7,0c2.3,0,4.1,1.7,4.1,4.1c0,4.8,0,9.6,0,14.4C56.1,23.7,56.1,23.8,56.1,23.9z M30.6,67.8
			c1.4,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.3-2.4-2.3c-1.4,0-2.4,1.1-2.4,2.4C28.2,66.8,29.3,67.8,30.6,67.8z M30.6,6.9
			c-0.6,0-1.3,0-1.9,0c-0.6,0-1,0.4-1,0.9c0,0.5,0.4,0.9,0.9,0.9c1.3,0,2.5,0,3.8,0c0.6,0,0.9-0.4,0.9-0.9c0-0.5-0.4-0.9-0.9-0.9
			C31.9,6.9,31.3,6.9,30.6,6.9z"/>
                <path d="M42.7,50.7c0-6.6,0-13.3,0-19.9c0-1.6,0.7-2.9,2.1-3.7c0.6-0.3,1.2-0.5,1.9-0.5c8,0,16.1,0,24.1,0
			c2.3,0,4,1.7,4.1,4c0,0.1,0,0.1,0,0.2c0,13.3,0,26.6,0,39.8c0,2-1.2,3.6-3.1,4.1c-0.4,0.1-0.8,0.1-1.1,0.1c-7.9,0-15.8,0-23.7,0
			c-2.5,0-4.2-1.7-4.2-4.3C42.7,64,42.7,57.3,42.7,50.7z M69.5,49.4c0-5.3,0-10.6,0-15.9c0-1-0.5-1.6-1.6-1.6c-6.1,0-12.2,0-18.3,0
			c-1.1,0-1.6,0.5-1.6,1.6c0,10.5,0,21.1,0,31.6c0,1.1,0.5,1.6,1.6,1.6c6.1,0,12.1,0,18.2,0c1,0,1.7-0.5,1.7-1.7
			C69.5,59.9,69.5,54.6,69.5,49.4z M58.8,68.5c-1.3,0-2.4,1-2.4,2.3c0,1.3,1.1,2.4,2.4,2.4c1.4,0,2.4-1,2.4-2.4
			C61.2,69.5,60.1,68.5,58.8,68.5z M58.8,30.2c0.6,0,1.2,0,1.9,0c0.6,0,1-0.4,1-0.9c0-0.5-0.4-0.9-1-0.9c-1.3,0-2.5,0-3.8,0
			c-0.6,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,1,0.9C57.5,30.2,58.1,30.2,58.8,30.2z"/>
            </svg>
        )
    }
}