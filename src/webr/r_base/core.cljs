(ns webr.r-base.core
  "R Base core namespace.
   Requires and re-exports all wrapped R base distribution functions."
  (:require [webr.r-base.norm]
            [webr.r-base.unif]
            [webr.r-base.discrete]
            [webr.r-base.continuous]))
