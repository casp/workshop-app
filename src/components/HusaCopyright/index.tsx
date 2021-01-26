import React from 'react';

export const HusaCopyright = () => {
    return (
        <p className="text-center">
          {'Copyright © '}
          <a href="https://www.homesusa.com" target="_blank" rel="noreferrer">HomesUSA</a> 
            {' '} {new Date().getFullYear()}
        </p>
    );
}