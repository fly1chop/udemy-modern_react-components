import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'werefds123',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want! Try it out right now! You can use React on any project you want! Try it out right now! You can use React on any project you want! Try it out right now!',
    },
    {
      id: 'fser32s',
      label: 'Can I use JavaScript on a project?',
      content:
        'You can use JavaScript on any project you want! Try it out right now! You can use JavaScript on any project you want! Try it out right now! You can use JavaScript on any project you want! Try it out right now!',
    },
    {
      id: 'req3ts124',
      label: 'Can I use Vue.js on a project?',
      content:
        'You can use Vue.js on any project you want! Try it out right now! You can use Vue.js on any project you want! Try it out right now! You can use Vue.js on any project you want! Try it out right now!',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
