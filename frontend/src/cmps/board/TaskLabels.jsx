import React from 'react';
import { useSelector } from 'react-redux';

// Blind-Mode
import redBlindColorSign from '../../assets/imgs/blind-color/red.svg';
import purpleBlindColorSign from '../../assets/imgs/blind-color/purple.svg';
import yellowBlindColorSign from '../../assets/imgs/blind-color/yellow.svg';
import greenBlindColorSign from '../../assets/imgs/blind-color/green.svg';
import blueBlindColorSign from '../../assets/imgs/blind-color/blue.svg';
import buggerBlindColorSign from '../../assets/imgs/blind-color/bugger-green.svg';
import darkBlindColorSign from '../../assets/imgs/blind-color/dark-navy.svg';
import lightBlueBlindColorSign from '../../assets/imgs/blind-color/light-blue.svg';
import orangeBlindColorSign from '../../assets/imgs/blind-color/orange.svg';
import pinkBlindColorSign from '../../assets/imgs/blind-color/pink.svg';

export function TaskLabels({ labelIds, boardLabels, areLabelsShown, setLabelsShown, isQuickEdit = false }) {
  const isBlindMode = useSelector(state => state.appModule.isBlindMode);

  const onLabelClick = ev => {
    ev.preventDefault();
    setLabelsShown(!areLabelsShown);
  };

  const getColorBlindSignByColor = (color) => {
    switch (color) {
      // red
      case '#ed5a46':
        return redBlindColorSign
      // purple
      case '#c377e0':
        return purpleBlindColorSign
      // yellow
      case '#f2d600':
        return yellowBlindColorSign
      // green
      case '#61bd4f':
        return greenBlindColorSign
      // blue
      case '#0079bf':
        return blueBlindColorSign
      // bugger
      case '#51e898':
        return buggerBlindColorSign
      // dark-navy
      case '#344563':
        return darkBlindColorSign
      // light-blue
      case '#00c2e0':
        return lightBlueBlindColorSign
      // orange
      case '#ff9f1a':
        return orangeBlindColorSign
      // pink
      case '#ff78cb':
        return pinkBlindColorSign

      default:
        return redBlindColorSign
    }
  }

  return (
    <div className="task-labels-container flex">
      {labelIds.map((labelId, index) => {
        const label = boardLabels.find(label => label.id === labelId);
        if (label) {
          return (
            <div
              className={`label flex ${areLabelsShown ? 'open' : ''} ${(isBlindMode) ? 'blind-mode' : ''} `}
              style={{ background: label.color }}
              key={index}
              onClick={ev => {
                if (!isQuickEdit) onLabelClick(ev);
              }}>

              {!areLabelsShown && <span>
                {isBlindMode && <div className='blind-sign-container'>
                  <img className='blind-color-sign-expended-svg' src={getColorBlindSignByColor(label.color)} />
                  <img className='blind-color-sign-expended-svg' src={getColorBlindSignByColor(label.color)} />
                  <img className='blind-color-sign-expended-svg' src={getColorBlindSignByColor(label.color)} />
                </div>}
              </span>}
              {areLabelsShown && <span>
                {isBlindMode && <div>
                  <img className='blind-color-sign-expended-svg' src={getColorBlindSignByColor(label.color)} />
                </div>}
                {label.title}
              </span>}
            </div>
          );
        } else return null;
      })}
    </div>
  );
}
