import React from 'react';

let messages = ['old', 'young'];

export default function getMessage(years: React.ReactNode) {
  let yearsAbs = Math.abs(Number(years));

  if (yearsAbs == 0 && yearsAbs <= 6) return 'a robot?';
  if (yearsAbs > 6 && yearsAbs <= 12) return 'suckling';
  if (yearsAbs > 12 && yearsAbs <= 18) return 'infant with mustache';
  if (yearsAbs > 18 && yearsAbs <= 30) return 'ready for parties';
  if (yearsAbs > 30 && yearsAbs <= 36) return 'still partying?';
  if (yearsAbs > 36 && yearsAbs <= 42) return 'wise';
  if (yearsAbs > 42 && yearsAbs <= 48) return 'ancient';
  if (yearsAbs > 48 && yearsAbs <= 54) return 'old enough to tells stories';
  if (yearsAbs > 54 && yearsAbs <= 60) return 'old as hell';
  if (yearsAbs > 60 && yearsAbs <= 66) return 'retired';
  if (yearsAbs > 66 && yearsAbs <= 72) return 'retired, right?';
  if (yearsAbs > 72 && yearsAbs <= 78) return 'a dinosaur';
  if (yearsAbs > 78 && yearsAbs <= 90) return 'how was the big bang?';
  if (yearsAbs > 90) return 'seriously?';
}
