(ns r-base.core
  "R Base core namespace.
   Requires and re-exports all wrapped R base distribution functions."
  (:require [r-base.norm]
            [r-base.unif]
            [r-base.discrete]
            [r-base.continuous]))
