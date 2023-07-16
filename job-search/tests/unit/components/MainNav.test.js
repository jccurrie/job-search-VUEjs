import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const companyName = screen.getByText('JCurrie Careers');
    expect(companyName).toBeInTheDocument();
  });

  it('displays menu items for navigation', () => {
    render(MainNav);
    const navigationMenuitems = screen.getAllByRole('listitem');
    console.log(navigationMenuitems);
    const navigationmenuTexts = navigationMenuitems.map((item) => item.textContent);
    console.log(navigationmenuTexts);
    expect(navigationmenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at JCurrie Careers',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
});
