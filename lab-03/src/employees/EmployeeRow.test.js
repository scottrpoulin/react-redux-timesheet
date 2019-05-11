import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('<EmployeeRow />', () => {
  let wrapper;

  beforeEach(() => {
    const employee = {
      username: 'scottrpoulin',
      email: 'scottrpoulin@gmail.com',
      firstName: 'Scott',
      lastName: 'Poulin',
      admin: true
    };
    wrapper = shallow(<EmployeeRow employee={employee} />);
  });

  it('should instantiate the Employee Row Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(5);
    expect(wrapper.find('td').at(0).text()).toEqual('scottrpoulin');
    expect(wrapper.find('td').at(1).text()).toEqual('scottrpoulin@gmail.com');
    expect(wrapper.find('td').at(2).text()).toEqual('Scott');
    expect(wrapper.find('td').at(3).text()).toEqual('Poulin');
    expect(wrapper.find('td').at(4).text()).toEqual('Yes');
  });
});
