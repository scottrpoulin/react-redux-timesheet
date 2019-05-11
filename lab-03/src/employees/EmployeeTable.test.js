import React from 'react';
import EmployeeTable from './EmployeeTable';
import { shallow } from 'enzyme';
import EmployeeRow from './EmployeeRow';

describe('<EmployeeTable />', () => {
  let wrapper;

  beforeEach(() => {
    const employees = [
      {
        username: 'fflintstone',
        email: 'fred.flintstone@slatequarry.com',
        firstName: 'Fred',
        lastName: 'Flintstone',
        admin: true,
        _id: 1
      }
    ];
    wrapper = shallow(<EmployeeTable employees={employees} />);
  });

  it('should instantiate the Employee Table Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render a row for each project', () => {
    expect(wrapper.find(EmployeeRow)).toHaveLength(1);
  });
});
