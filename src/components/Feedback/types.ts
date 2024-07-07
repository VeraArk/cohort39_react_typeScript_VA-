export interface FeedbackProps {
  like?: number;
  dislike?: number;
  onDislike: () => void;
  onLike: () => void;
  resetResults: () => void;
}
