const timelineData = [
  {
    year: '2015',
    title: 'Early Budget Pressures',
    description: 'Federal support began tightening for special education services. Many schools experienced flat funding while student needs increased.'
  },
  {
    year: '2017',
    title: 'Medicaid & Education Cuts Proposed',
    description: 'Proposals under the Trump administration included massive cuts to Medicaid and special ed. Districts with high special-needs populations saw early warnings.'
  },
  {
    year: '2020',
    title: 'Pandemic Impact',
    description: 'COVID-19 disrupted learning and increased mental health needs. Funding was temporarily increased through emergency relief (ESSER).'
  },
  {
    year: '2022',
    title: 'ESSER Expiring',
    description: 'Short-term relief funds started to phase out, creating concern about how to sustain support services.'
  },
  {
    year: '2023',
    title: 'SNAP Restrictions',
    description: 'New SNAP rules went into effect, reducing food access for many low-income families with special needs students.'
  },
  {
    year: '2024',
    title: 'Work Requirements Reinstated',
    description: 'Work requirements for benefits like SNAP and Medicaid reinstated in many states, disproportionately affecting caregivers of disabled children.'
  },
  {
    year: '2025',
    title: 'Funding Cliff Hits',
    description: 'Projected loss of ESSER, SNAP reductions, and increased eligibility restrictions — major districts risk service cutbacks. Estimated $14B gap across the U.S. for special needs support.'
  }
];

const timeline = document.getElementById("timeline");
const eventTitle = document.getElementById("eventTitle");
const eventDescription = document.getElementById("eventDescription");

timelineData.forEach((event, index) => {
  const btn = document.createElement("button");
  btn.innerText = event.year;
  btn.addEventListener("click", () => {
    eventTitle.innerText = `${event.year} – ${event.title}`;
    eventDescription.innerText = event.description;
  });
  timeline.appendChild(btn);
});
