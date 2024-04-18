import { IconCalendar, IconLayoutDashboard } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Features',
  },
  {
    id: uniqueId(),
    title: 'Events',
    icon: IconCalendar,
    href: '/events',
  },
];

export default Menuitems;
