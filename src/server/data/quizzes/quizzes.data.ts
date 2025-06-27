import { ep1PilotQuizzes } from './episodes-quizzes/ep1-pilot';
import { ep10OtoLoluaQuizzes } from './episodes-quizzes/ep10-oto-lolua';
import { ep11GiorgiMachitidzeQuizzes } from './episodes-quizzes/ep11-giorgi-machita';
import { ep12TornikeQuizzes } from './episodes-quizzes/ep12-tornike';
import { ep13NikaQuizzes } from './episodes-quizzes/ep13-nika';
import { ep14NatiaKukhilavaQuizzes } from './episodes-quizzes/ep14-natia-kukhilava';
import { ep15GiorgiBagdavadzeQuizzes } from './episodes-quizzes/ep15-giorgi-bagdavadze';
import { ep16DavidBumbeishviliQuizzes } from './episodes-quizzes/ep16-david-bumbeishvili';
import { ep17IrakliKokrashviliQuizzes } from './episodes-quizzes/ep17-irakli-kokra';
import { ep18LevanMamulashviliQuizzes } from './episodes-quizzes/ep18-levan-mamulashvili';
import { ep19IrakliKoiavaQuizzes } from './episodes-quizzes/ep19-irakli-koiava';
import { ep2LevanLotuashviliQuizzes } from './episodes-quizzes/ep2-levan';
import { ep20IrakliGabisoniaQuizzes } from './episodes-quizzes/ep20-irakli-gabisonia';
import { ep3ArchilQuizzes } from './episodes-quizzes/ep3-archil';
import { ep4TatoQuizzes } from './episodes-quizzes/ep4-tato';
import { ep5GiorgiQuizzes } from './episodes-quizzes/ep5-giorgi';
import { ep6NikaQuizzes } from './episodes-quizzes/ep6-nika';
import { ep7ZubaQuizzes } from './episodes-quizzes/ep7-zuba';
import { ep8QaQuizzes } from './episodes-quizzes/ep8-qa';
import { ep9GiorgiDalakaQuizzes } from './episodes-quizzes/ep9-giorgi-dalaka';

import { Quiz } from './quizzes.types';

export const allQuizzes: Quiz[] = [
  ...ep20IrakliGabisoniaQuizzes,
  ...ep19IrakliKoiavaQuizzes,
  ...ep18LevanMamulashviliQuizzes,
  ...ep17IrakliKokrashviliQuizzes,
  ...ep16DavidBumbeishviliQuizzes,
  ...ep15GiorgiBagdavadzeQuizzes,
  ...ep14NatiaKukhilavaQuizzes,
  ...ep13NikaQuizzes,
  ...ep12TornikeQuizzes,
  ...ep11GiorgiMachitidzeQuizzes,
  ...ep10OtoLoluaQuizzes,
  ...ep9GiorgiDalakaQuizzes,
  ...ep8QaQuizzes,
  ...ep7ZubaQuizzes,
  ...ep6NikaQuizzes,
  ...ep5GiorgiQuizzes,
  ...ep4TatoQuizzes,
  ...ep3ArchilQuizzes,
  ...ep2LevanLotuashviliQuizzes,
  ...ep1PilotQuizzes,
];
