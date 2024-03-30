#!/usr/bin/env python3
"""This script contains a helper function that calculates
the range of indexes to return in a list of tuples for
pagination
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    a helper function that calculates
    the range of indexes to return in a list of tuples
    for pagination
    """
    end_index: int = page * page_size
    start_index: int = end_index - page_size
    return (start_index, end_index)
