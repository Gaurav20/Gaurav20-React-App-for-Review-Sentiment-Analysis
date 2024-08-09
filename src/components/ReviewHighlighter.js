import React from 'react';

const sentimentColors = {
  Positive: '#D9F2DD',
  Negative: '#F2DBD9',
  Mixed: '#e8bd6d3d',
  Neutral: '#eaf09b6b'
};

function ReviewHighlighter({ content, analytics }) {
  const highlightContent = (content, analytics) => {
    let highlightedContent = content;

    analytics.forEach(({ highlight_indices, sentiment }) => {
      const color = sentimentColors[sentiment] || '#eaf09b6b'; // Default to Neutral if sentiment is unknown
 
      highlight_indices.forEach(([start, end]) => {
        highlightedContent = `${highlightedContent.slice(0, start)}
          <span style="background-color: ${color};">${highlightedContent.slice(start, end)}</span>
          ${highlightedContent.slice(end)}`;
      });
    });

    return { __html: highlightedContent };
  };

  return (
    <div
      dangerouslySetInnerHTML={highlightContent(content, analytics)}
    />
  );
}

export default ReviewHighlighter;
