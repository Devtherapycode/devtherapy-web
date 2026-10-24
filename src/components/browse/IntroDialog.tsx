import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type IntroDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/** The Season 2 intro, played in a modal. */
export const IntroDialog = ({ open, onOpenChange }: IntroDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-5xl overflow-hidden border-white/10 bg-black p-0">
      <DialogTitle className="sr-only">Devtherapy Season 2 intro</DialogTitle>
      <video src="/videos/season-2-intro.mp4" poster="/videos/season-2-intro.jpg" controls autoPlay playsInline className="aspect-video w-full bg-black" />
    </DialogContent>
  </Dialog>
);
