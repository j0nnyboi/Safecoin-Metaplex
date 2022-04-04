#![allow(warnings)]

mod utils;

pub mod entrypoint;
pub mod errors;
pub mod instruction;
pub mod processor;

/// Prefix used in PDA derivations to avoid collisions with other programs.
pub const PREFIX: &str = "auction";

pub const EXTENDED: &str = "extended";
safecoin_program::declare_id!("Hz59yD8jEm9jFTtC4GnxM1bbBKRcb57NtoSJYa1CBA8K");
