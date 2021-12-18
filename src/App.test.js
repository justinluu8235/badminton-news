import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the bwf schedule logo', () => {
  render(<App />);
  const element = screen.getByTitle(/scheduleLogo1/i);
  expect(element).toBeInTheDocument();
});


test('renders calendar link on the nav bar', () => {
  render(<App />);
  const element = screen.getByTitle(/calendarLink/i);
  expect(element).toBeInTheDocument();
});


test('renders the logo on the navbar', () => {
  render(<App />);
  const element = screen.getByTitle(/mainLogo/i);
  expect(element).toBeInTheDocument();
});

test('renders the main title of the banner news', () => {
  render(<App />);
  const element = screen.getByTitle(/mainBannerTitle/i);
  expect(element).toBeInTheDocument();
});

test('renders the date of the tournament in the schedule', () => {
  render(<App />);
  const element = screen.getByTitle(/scheduleDate1/i);
  expect(element).toBeInTheDocument();
});

test('renders the date of the tournament in the schedule', () => {
  render(<App />);
  const element = screen.getByTitle(/scheduleDate2/i);
  expect(element).toBeInTheDocument();
});


test('renders the copyright', () => {
  render(<App />);
  const element = screen.getByTitle(/copyright/i);
  expect(element).toBeInTheDocument();
});


test('renders the terms and condition', () => {
  render(<App />);
  const element = screen.getByText(/Terms & Conditions/i);
  expect(element).toBeInTheDocument();
});