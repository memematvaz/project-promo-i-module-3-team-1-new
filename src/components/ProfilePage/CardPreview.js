import React from 'react';
import PreviewResetButton from './ComponentsPreview/PreviewResetButton.js';
import PreviewProfileInfo from './ComponentsPreview/PreviewProfileInfo.js';
import PreviewAvatarBox from './ComponentsPreview/PreviewAvatarBox.js';
import PreviewSocialButtonList from './ComponentsPreview/PreviewSocialButtonList.js';

class CardPreview extends React.Component {
  render() {
    
    return (
      <div id="cardPreview" className={`grid-2 ${this.props.mode === true ? 'darkCardPreview' : 'cardPreview'}`}>
        <div id="cardPreview__centeredBox" className="cardPreview__centeredBox" >
          <PreviewResetButton handleReset={this.props.handleReset}
                              handleSwitchMode= {this.handleSwitchMode}
                              mode ={this.props.mode}
           />
          <div id="card" className="card" >
            <PreviewProfileInfo
              value={this.props.checked}
              name={this.props.valueName}
              job={this.props.valueJob}
            />
            <PreviewAvatarBox
            handleImage = {this.props.handleImage}
            inputFile={this.props.inputFile}
            />
           
            <PreviewSocialButtonList  value={this.props.checked}
                                       email={this.props.valueEmail}
                                       phone={this.props.valuePhone}
                                       linkedin={this.props.valueLinkedin}
                                       github={this.props.valueGithub}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardPreview;