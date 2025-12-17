import React from 'react';
import Heading from './Heading';

interface SectionHeaderProps {
  id: string;
  title: string;
  description: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  title,
  description,
  className = '',
  headingClassName = '',
  descriptionClassName = ''
}) => {
  return (
    <div className={className}>
      <Heading id={id} className={headingClassName}>
        {title}
      </Heading>
      <p className={descriptionClassName}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
