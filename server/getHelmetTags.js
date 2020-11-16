import React from 'react';

export default bodyJSON => {
  const helmetTags = [
    <title key="title">{bodyJSON.title}</title>,
    <meta key="title-meta" name="title" content={bodyJSON.title} />,
    <meta
      key="description"
      name="description"
      content={bodyJSON.description}
    />,
    <meta key="keywords" name="keywords" content={bodyJSON.keywords} />,
    <meta
      key="geo.position"
      name="geo.position"
      content={`${bodyJSON.latitude}; ${bodyJSON.longitude}`}
    />,
    <meta
      key="geo.placename"
      name="geo.placename"
      content={bodyJSON.placename}
    />,
    <meta key="geo.region" name="geo.region" content={bodyJSON.region} />,
    <meta key="robots" name="robots" content="index,follow" />,
    <meta key="coverage" name="coverage" content="Worldwide" />
  ];
  return helmetTags;
};
