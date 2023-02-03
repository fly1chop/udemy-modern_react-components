import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

interface AccordionProps {
  items: {
    id: string;
    label: string;
    content: string;
  }[];
}

function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number>();

  const handleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div
          className='flex justify-between p-3 bg-gray-50 border-b items-center- cursor-pointer'
          onClick={() => handleExpand(index)}
        >
          {item.label}
          <span className='text-xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });

  return <div className='border-x border-t rounded'>{renderedItems}</div>;
}

export default Accordion;
