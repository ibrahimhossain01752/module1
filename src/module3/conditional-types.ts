type Bandhubi = 'Monika' | 'Rachel' |'Nabil'

type RemoveBandhubi<T> = T extends 'Monika' ? never :T

type CurrentBandhubi = RemoveBandhubi<Bandhubi>