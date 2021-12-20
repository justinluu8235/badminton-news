import { render, screen } from '@testing-library/react';
import PlayerPage from './PlayerPage';

test('renders the logo on the navbar', () => {
    render(<PlayerPage />);
    const element = screen.getByTitle(/mainLogo/i);
    expect(element).toBeInTheDocument();
});

test('renders link to chinese translation on the navbar', () => {
  render(<PlayerPage />);
  const element = screen.getByTitle(/chinese-translation/i);
  expect(element).toBeInTheDocument();
});

test('renders the background to the banner of the page', () => {
  render(<PlayerPage />);
  const element = screen.getByTitle(/player-banner/i);
  expect(element).toBeInTheDocument();
});

test('renders the text to the banner of the page', () => {
  render(<PlayerPage />);
  const element = screen.getByTitle(/player-ban-text/i);
  expect(element).toBeInTheDocument();
});

test('renders the tab for badminton player', () => {
  render(<PlayerPage />);
  const element = screen.getByTitle(/badminton-tab/i);
  expect(element).toBeInTheDocument();
});

test('renders the tab for para badminton player', () => {
  render(<PlayerPage />);
  const element = screen.getByTitle(/para-badmin-tab/i);
  expect(element).toBeInTheDocument();
});

test('renders the search bar for players', () => {
  render(<PlayerPage />);
  const element = screen.getByTitle(/table-search-bar/i);
  expect(element).toBeInTheDocument();
});

test('renders the players first name', () => {
  render(<PlayerPage />);
  let element = screen.getAllByTitle(/player-first-name/i);
  element = element[0];
  expect(element).toBeInTheDocument();
});

test('renders the players image', () => {
  render(<PlayerPage />);
  let element = screen.getAllByTitle(/player-photo/i);
  element = element[0];
  expect(element).toBeInTheDocument();
});

test('renders the players flag', () => {
  render(<PlayerPage />);
  let element = screen.getAllByTitle(/player-flag/i);
  element = element[0];
  expect(element).toBeInTheDocument();
});


test('renders the copyright', () => {
    render(<PlayerPage />);
    const element = screen.getByTitle(/copyright/i);
    expect(element).toBeInTheDocument();
  });
  
test('renders the terms and condition', () => {
  render(<PlayerPage />);
  const element = screen.getByText(/Terms & Conditions/i);
  expect(element).toBeInTheDocument();
});