import { render, screen } from '@testing-library/react';
import Parallax from './Parallax';

test('renders the bwf schedule logo', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/scheduleLogo1/i);
  expect(element).toBeInTheDocument();
});

test('renders link to chinese translation on the navbar', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/chinese-translation/i);
  expect(element).toBeInTheDocument();
});



test('renders calendar link on the nav bar', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/calendarLink/i);
  expect(element).toBeInTheDocument();
});


test('renders the logo on the navbar', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/mainLogo/i);
  expect(element).toBeInTheDocument();
});

test('renders the main title of the banner news', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/mainBannerTitle/i);
  expect(element).toBeInTheDocument();
});

test('renders the date of the tournament in the schedule', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/scheduleDate1/i);
  expect(element).toBeInTheDocument();
});

test('renders the date of the tournament in the schedule', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/scheduleDate2/i);
  expect(element).toBeInTheDocument();
});


test('renders the copyright', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/copyright/i);
  expect(element).toBeInTheDocument();
});


test('renders the terms and condition', () => {
  render(<Parallax />);
  const element = screen.getByText(/Terms & Conditions/i);
  expect(element).toBeInTheDocument();
});