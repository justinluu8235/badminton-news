import { render, screen } from '@testing-library/react';
import RankingPage from './RankingPage';


test('renders the logo on the navbar', () => {
    render(<RankingPage />);
    const element = screen.getByTitle(/mainLogo/i);
    expect(element).toBeInTheDocument();
});

test('renders link to chinese translation on the navbar', () => {
    render(<RankingPage />);
    const element = screen.getByTitle(/chinese-translation/i);
    expect(element).toBeInTheDocument();
});


test('renders the background of the banner', () => {
    render(<RankingPage />);
    const element = screen.getByTitle(/ranking-banner/i);
    expect(element).toBeInTheDocument();
});

test('renders the text of the banner', () => {
    render(<RankingPage />);
    const element = screen.getByTitle(/mainBannerTitle/i);
    expect(element).toBeInTheDocument();
});

test('renders the search bar for players', () => {
    render(<RankingPage />);
    const element = screen.getByTitle(/table-search-bar/i);
    expect(element).toBeInTheDocument();
});

test('renders the column titles of the table', () => {
    render(<RankingPage />);
    const element = screen.getByTitle(/column-names/i);
    expect(element).toBeInTheDocument();
});

test('renders row data for the table', () => {
    render(<RankingPage />);
    const element = screen.getByTitle(/first-row-data/i);
    expect(element).toBeInTheDocument();
});



test('renders the copyright', () => {
    render(<RankingPage />);
    const element = screen.getByTitle(/copyright/i);
    expect(element).toBeInTheDocument();
  });
  
test('renders the terms and condition', () => {
  render(<RankingPage />);
  const element = screen.getByText(/Terms & Conditions/i);
  expect(element).toBeInTheDocument();
});