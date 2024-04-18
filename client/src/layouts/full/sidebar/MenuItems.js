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
    title: 'Big Calendar',
    icon: IconCalendar,
    href: '/ui/typography',
  },
];

export default Menuitems;
