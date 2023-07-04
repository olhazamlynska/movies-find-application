import {
  TypographyProps,
  LayoutProps,
  SpaceProps,
  FlexProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  PositionProps,
} from 'styled-system';
export interface Props
  extends TypographyProps,
    LayoutProps,
    SpaceProps,
    FlexProps,
    BackgroundProps,
    BorderProps,
    ColorProps,
    PositionProps {
  children?: React.ReactNode;
}
export interface IMoviesData {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface IMovieById extends IMovie {
  genres: [{ id: number; name: string[] }];
  overview: string;
}

export interface IReview {
  id: string;
  author: string;
  content: string;
}

export interface IActor {
  id: number;
  character: string;
  name: string;
  profile_path: string;
}
