import React, { PureComponent } from 'react';
//import './_project_item.scss';

class ItemProject extends PureComponent {
  componentDidMount() {
    console.log('hey hey');
  }

  render() {
    const { position, lastName, imgs, name } = this.props;
    return (
      <figure className={`Work-container ${lastName}`}>
        <span className="Work-numerator">{position}</span>
        {imgs.map((img, index) => (
          <img
            className={index === 0 ? 'Work-desktop' : 'Work-movile'}
            key={img.alt}
            src={img.src} alt={img.alt}
          />))}
        <figcaption className="Work-name">{name}</figcaption>
      </figure>
    );
  }
}

export default ItemProject;
